import { defineConfig, presetAttributify, presetUno,presetIcons } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
    // ...UnoCSS options
    presets: [
        presetAttributify(),
        presetIcons(),
        presetUno()
    ],
    transformers: [
        transformerVariantGroup(),
        transformerDirectives(),
    ],
})