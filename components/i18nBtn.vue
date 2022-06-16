<template>
  <div class="select-btn ma-1">
    {{ $t('lang') }} ：
    <select
      v-model="lang"
      @change="changeLanguage($event)"
    >
      <option
        v-for="(list, idx) in langList"
        :key="`lang-${idx}`"
        :value="list.value"
      >
        {{ list.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'I18nBtn',
  data () {
    return {
      lang: '',
      langList: [
        {
          name: 'TW',
          value: 'zh-tw'
        },
        {
          name: 'EN',
          value: 'en'
        }
      ]
    }
  },
  mounted () {
    this.lang = this.$i18n.locale
  },
  methods: {
    changeLanguage ($event) {
      this.$i18n.locale = $event.target.value
    }
  }
}
</script>

<style lang="scss">
.select-btn {
  select {
    padding: 2px;
    background: $body-bg;
    border-radius: 4px;
  }
}
</style>
