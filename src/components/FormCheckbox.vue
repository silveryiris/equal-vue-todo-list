<template>
  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text">{{ label }}</span>
      <input
        type="checkbox"
        :checked="inputValue"
        class="checkbox"
        :class="[checkboxVariant, checkboxSize]"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue"
import type { ComponentVariant, ComponentSize } from "../index"

import { toRefs } from "vue"
import { getCheckboxVariantMap } from "@/utils/componentVariant"
import { getCheckboxSizeMap } from "@/utils/componentSize"

const props = defineProps({
  inputValue: Boolean,
  label: String,
  variant: {
    type: String as PropType<ComponentVariant>,
    require: false,
    default: "",
  },
  size: {
    type: String as PropType<ComponentSize>,
    require: false,
    default: "",
  },
})

const { inputValue, label, variant, size } = toRefs(props)

const variantMap = getCheckboxVariantMap()

const checkboxVariant = variantMap.get(variant.value)

const sizeMap = getCheckboxSizeMap()

const checkboxSize = sizeMap.get(size.value)
</script>
