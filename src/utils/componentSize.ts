import type { ComponentSize } from "../index"

export const getCheckboxSizeMap = () => {
  return new Map<ComponentSize, String>([
    ["lg", "checkbox-lg"],
    ["md", "checkbox-md"],
    ["sm", "checkbox-sm"],
    ["xs", "checkbox-xs"],
  ])
}
