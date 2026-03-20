<template>
  <label class="check-consent-wrap">
    <input type="checkbox" class="input-check" />
    <div class="icon-box">
      <div class="icon-check"></div>
    </div>
    <div class="input-check-text">
      <span>Даю </span><router-link to="/policy">согласие на обработку данных</router-link>
    </div>
  </label>
</template>

<style lang="scss">
@use '../../css/abstractions/' as *;

.check-consent-wrap {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  gap: 10px;
}

.icon-box {
  @include icon-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-check {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.icon-check {
  position: relative;
}

.icon-check:after {
  content: url(../../assets/icons/square-sm-no.svg);
  position: absolute;
  left: -7px;
  top: -7px;
}

.check-consent-wrap input:checked~.icon-box .icon-check:after {
  content: url(../../assets/icons/square-sm-yes.svg);
}

.input-check-text span:first-child {
  color: $font-primary-color;
}

.input-check-text {
  @include body-2;
  color: $font-link;
}
</style>
