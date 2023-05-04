<template>
    <div class="card-frame" v-if="card_show">
        <transition name="CardAnimation" appear>
            <div class="card">
                <div class="card-header">
                    <slot name="card-header">
                        <div class=""></div>
                    </slot>
                    <div class="card-title-cancel card-cancelicon-frame" @mouseup="CardShow(false)">
                        <i class="card-cancelicon ri-close-line"></i>
                    </div>
                </div>
                <div class="card-body">
                    <slot name="card-body">
                        <div class=""></div>
                    </slot>
                </div>
                <div class="card-footer">
                    <div class="card-footer-content">
                        <slot name="card-footer">
                            <div class=""></div>
                        </slot>
                    </div>
                    <div class="card-btn-frame">
                        <slot name="card-footer-btns">
                            <div class="card-btn-cancel button bg-red card-btn" @mouseup="CardShow(false)">cancel</div>
                        </slot>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
    import { onMounted,onUpdated, onBeforeMount,onBeforeUnmount,onUnmounted,onServerPrefetch, Ref} from 'vue';
    import { ref,reactive,readonly,defineComponent} from 'vue';
    import { computed,watch,watchEffect} from 'vue';
    import {getCurrentInstance,inject,provide} from 'vue';
     import useStore from '@st/store';
    import {useRouter} from 'vue-router';

    export interface CardApi{
        card_show:boolean
    } 

    let card_show:Ref<boolean> = ref(false)
    const CardShow = (val:boolean)=>{
        card_show.value = val
    }
    defineExpose({
        CardShow
    })
</script>

<style lang="scss" scoped>
    .card-frame{
        z-index: 99;
        position: fixed;
        left:0;
        top:0;
        right:0;
        bottom:0;
        background-color: rgba(0,0,0,0.2);
        display: inline-block;
    }
    .card{
        max-width: 50vw;
        position: absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        margin: 30px auto;
        display: grid;
        grid-template-rows: 1fr 12fr 1fr;
        background-color: #fff;
        border-radius: 10px;
        overflow: hidden;
    }
    .CardAnimation-enter-active{
        animation: CardAnimation linear 0.1s;
    }
    .CardAnimation-leave-active{
        animation: CardAnimation linear 0.1s reverse;
    }
    .card-header{
        border-bottom: 1px solid #eee;
        display: grid;
        grid-template-columns: 5fr 1fr;
        padding:10px 20px;
        align-items: center;
    }
    .card-cancelicon-frame{
        display: grid;
        justify-items: end;
        align-items: center;
    }
    .card-cancelicon{
        padding: 5px;
        cursor: pointer;
        &::before{
            font-size: 2rem;
        }
        &:hover{
            &::before{
                color: #eea056;
            }
        }
    }
    .card-body{
        overflow: hidden;
        padding:20px;
        display: inline-block;
    }
    .card-footer{
        align-self: end;
        padding: 20px;
        display: grid;
        grid-template-columns: 2fr 1fr;
        border-top: 1px solid #eee;
    }
    .card-btn-frame{
        display: flex;
        align-items: center;
        justify-content: end;
        & > *{
            margin: 0px 5px;
        }
    }
    @keyframes CardAnimation {
        0%{
            opacity: 0;
            transform: translateY(-50px);
        }

        100%{
            opacity: 1;
            transform: translateY(0px);
        }
    }
</style>