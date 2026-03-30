<script setup>
import { computed } from 'vue'

import IconComponent from '../commons/IconComponent.vue'

const props = defineProps({
	current: {
		type: Number,
		default: 0,
	},
	max: {
		type: Number,
		default: 100,
	},
	title: {
		type: String,
		default: '',
	},
	footerText: {
		type: String,
		default: '',
	},
	footerIconName: {
		type: String,
		default: 'heart-01',
	},
	showFooterIcon: {
		type: Boolean,
		default: true,
	},
	ringRadius: {
		type: Number,
		default: 52,
	},
	strokeWidth: {
		type: Number,
		default: 10,
	},
})

const viewBoxSize = 120

const ratio = computed(() => {
	if (!props.max || props.max <= 0) {
		return 0
	}
	return Math.min(1, Math.max(0, props.current / props.max))
})

const circumference = computed(() => 2 * Math.PI * props.ringRadius)

const dashOffset = computed(() => circumference.value * (1 - ratio.value))

const isCardLayout = computed(() => Boolean(props.title || props.footerText))
</script>

<template>
	<div
		class="circular-progress"
		:class="{ 'circular-progress--card': isCardLayout }"
	>
		<div class="circular-progress__ring-wrap">
			<svg
				class="circular-progress__svg"
				:viewBox="`0 0 ${viewBoxSize} ${viewBoxSize}`"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					class="circular-progress__track"
					fill="none"
					:stroke-width="strokeWidth"
					:cx="viewBoxSize / 2"
					:cy="viewBoxSize / 2"
					:r="ringRadius"
				/>
				<circle
					class="circular-progress__value"
					fill="none"
					stroke-linecap="round"
					:stroke-width="strokeWidth"
					:cx="viewBoxSize / 2"
					:cy="viewBoxSize / 2"
					:r="ringRadius"
					:stroke-dasharray="`${circumference} ${circumference}`"
					:stroke-dashoffset="dashOffset"
					:transform="`rotate(-90 ${viewBoxSize / 2} ${viewBoxSize / 2})`"
				/>
			</svg>
			<div class="circular-progress__center">
				<span class="circular-progress__current">{{ current }}</span>
				<span class="circular-progress__max">из {{ max }}</span>
			</div>
		</div>

		<div
			v-if="title || footerText"
			class="circular-progress__aside"
		>
			<p
				v-if="title"
				class="circular-progress__title"
			>
				{{ title }}
			</p>
			<div
				v-if="footerText"
				class="circular-progress__pill"
			>
				<div
					v-if="showFooterIcon && footerIconName"
					class="circular-progress__pill-icon"
				>
					<icon-component
						size="sm"
						color="primary"
						:icon-name="footerIconName"
					/>
				</div>
				<p class="circular-progress__pill-text">
					{{ footerText }}
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@use '../../css/abstractions/' as *;

.circular-progress {
	display: inline-flex;
	align-items: center;
	gap: $space-16;
	font-family: 'Manrope', system-ui, sans-serif;
	color: $color_text_white;

	&--card {
		width: 100%;
		padding: $space-20 $space-20 $space-20 $space-16;
		border-radius: $radius_card_big;
		background: linear-gradient(
			115deg,
			$color_second 0%,
			$color_primary 55%,
			$color_primary_border 100%
		);
		box-sizing: border-box;
	}
}

.circular-progress__ring-wrap {
	position: relative;
	width: 132px;
	height: 132px;
	flex-shrink: 0;
}

.circular-progress__svg {
	width: 100%;
	height: 100%;
	display: block;
}

.circular-progress__track {
	stroke: rgb(255 255 255 / 0.28);
}

.circular-progress__value {
	stroke: $color_text_white;
	transition: stroke-dashoffset 0.65s ease-in-out;
}

.circular-progress__center {
	position: absolute;
	inset: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	line-height: 1.15;
	pointer-events: none;
}

.circular-progress__current {
	font-size: 32px;
	font-weight: 800;
	letter-spacing: -0.02em;
}

.circular-progress__max {
	margin-top: 2px;
	font-size: 14px;
	font-weight: 500;
	opacity: 0.92;
}

.circular-progress__aside {
	flex: 1;
	min-width: 0;
	display: flex;
	flex-direction: column;
	gap: $space-12;
	justify-content: center;
}

.circular-progress__title {
	margin: 0;
	font-size: 18px;
	font-weight: 700;
	line-height: 1.25;
}

.circular-progress__pill {
	display: flex;
	align-items: center;
	gap: $space-12;
	padding: $space-12 $space-16;
	border-radius: $radius_card_inCard;
	background: rgb(255 255 255 / 0.22);
}

.circular-progress__pill-icon {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 36px;
	height: 36px;
	flex-shrink: 0;
	border-radius: 50%;
	background: $color_text_white;
}

.circular-progress__pill-text {
	margin: 0;
	font-size: 14px;
	font-weight: 600;
	line-height: 1.35;
}
</style>
