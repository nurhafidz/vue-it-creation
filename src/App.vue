<template>
    <div class="font-sans ">
        <pub-navbar/>
          <router-view/>
        <pub-footer/>
    </div>
</template>

<script >
import { defineComponent } from 'vue'
import PubNavbar from '@/components/PubNavbar.vue'
import PubFooter from '@/components/PubFooter.vue'

export default defineComponent({
    components: {
        PubNavbar,
        PubFooter
    },
   
})
</script>
