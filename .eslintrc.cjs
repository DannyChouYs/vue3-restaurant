module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',
        // 新增，必須放在最後面
        'plugin:prettier/recommended'
    ],
    overrides: [],
    parser: 'vue-eslint-parser', //解析.vue檔案
    parserOptions: {
        parser: '@typescript-eslint/parser', //解析vue檔案內的<script>標籤
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {}
}
