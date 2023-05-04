<template>
    <div class="index layout">
        <div class="index-frame layout-frame">
            
        </div>
    </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import dayjs from 'dayjs';
import { onMounted,onUpdated, onBeforeMount,onBeforeUnmount,onUnmounted,onServerPrefetch} from 'vue';
import { ref,reactive,readonly,defineComponent} from 'vue';
import { computed,watch,watchEffect} from 'vue';
import {getCurrentInstance,inject,provide} from 'vue';
import { Ref,ComputedRef} from 'vue';
import {useRouter,Router} from 'vue-router';
 import useStore from '@st/store';
const {auth,course_database} = useStore()
const router:Router = useRouter()
</script>

<style lang="scss" scoped>
</style>