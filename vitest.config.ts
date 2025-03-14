import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Включает глобальные API тестирования
    environment: "jsdom" // Если тестируешь React, лучше использовать jsdom
  }
});
