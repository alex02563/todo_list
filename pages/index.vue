<template>
  <div class="flex-basis-5 pa-6 board">
    <div class="row">
      <h1
        class="badge"
        :badge="lists.length"
      >
        {{ $t('todo_list') }}
      </h1>
    </div>
    <div
      v-for="(item, idx) in lists"
      :key="`item-${idx}`"
      class="flex my-6"
    >
      <checked
        v-model="item.checked"
        @eventClick="checkList(item.id)"
      />
      <div
        class="grow-1 flex-shrink"
        :class="{
          'blue--text': item.checked
        }"
      >
        {{ item.content }}
      </div>
      <delete-btn
        @eventClick="deleteList(item.id)"
      />
    </div>
    <div
      v-show="!lists.length"
      class="flex row justify-center my-6"
    >
      <h3>
        {{ $t('no_data') }}
      </h3>
    </div>
    <text-submit
      v-model.trim="typing"
      class="flex"
      @eventClick="addList"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TodoList',
  data () {
    return {
      typing: ''
    }
  },
  computed: {
    ...mapGetters({
      lists: 'lists'
    })
  },
  methods: {
    checkList (id) {
      const data = this.$_.cloneDeep(this.lists)
      data.forEach((item) => {
        if (item.id === id) {
          item.checked = !item.checked
        }
      })
      this.$store.dispatch('setLists', data)
    },
    addList () {
      if (this.typing) {
        const data = this.$_.cloneDeep(this.lists)
        let lastId = this.$_.cloneDeep(this.lists).pop().id
        data.push({
          id: lastId += 1,
          content: this.typing,
          checked: false
        })
        this.$store.dispatch('setLists', data)
        this.typing = ''
      }
    },
    deleteList (id) {
      const confirm = window.confirm(this.$t('confirm'))
      if (confirm) {
        const data = this.$_.cloneDeep(this.lists)
        const idx = data.findIndex(item => item.id === id)
        if (idx !== -1) {
          data.splice(idx, 1)
        }
        this.$store.dispatch('setLists', data)
      }
    }
  }
}
</script>
