import type { ComponentVariant } from "../index"

export const getCheckboxVariantMap = () => {
  return new Map<ComponentVariant, String>([
    ["primary", `checkbox-primary`],
    ["secondary", `checkbox-secondary`],
    ["accent", `checkbox-accent`],
    ["success", `checkbox-success`],
    ["warning", `checkbox-warning`],
    ["info", `checkbox-info`],
    ["error", `checkbox-error`],
  ])
}
