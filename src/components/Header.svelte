<script>
  import { getContext } from 'svelte'

  import Links from './Links.svelte'
  import ModalButton from './ModalButton.svelte'

  const { open } = getContext('simple-modal')

  const openModal = () => open(Links, {}, {
    styleWindow: {
      width          : '100%',
      maxWidth       : '360px',
      backgroundColor: '#303133'
    },
    closeButton: ModalButton
  })
</script>

<template>
    <header class="header">
        <div class="header_content container">
            <div class="header_main">
                <img class="header_icon" src="assets/logo-36.png" alt="CodeWars logo">
                <span class="header_heading">Codewars | stats</span>
            </div>

            <button class="header_name" on:click={openModal} title="My socials">
                v - excelsior
            </button>
        </div>
    </header>
</template>


<style lang="scss">
  @import './src/styles/vars.scss';
  @import './src/styles/mixins.scss';

  .header {
    height: 55px;
    padding: 8px;
    background-color: $surface-primary;

    @include screen('max', $M) {
      height: 40px;
    }

    &_content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    &_main {
      display: flex;
      align-items: center;
    }

    &_icon {
      @include screen('max', $M) {
        height: 24px;
      }
    }

    &_heading {
      font-size: 18px;
      padding: 0 12px;
      color: $accent;

      @include screen('max', $M) {
        font-size: 12px;
      }
    }

    &_name {
      display: block;
      outline: none;
      border: none;
      cursor: pointer;
      background-color: transparent;

      font-size: 24px;
      padding: 0 20px 4px;
      color: $accent;

      &:after {
        display: block;
        content: '';
        width: 0px;
        height: 2px;
        background-color: $accent;
        transition: width 0.2s;
      }

      &:hover:after {
        width: 100%;
      }

      @include screen('max', $M) {
        font-size: 16px;
        padding: 0 8px 4px;

        &:after {
          height: 1px;
        }
      }
    }
  }
</style>