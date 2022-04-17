module.exports = {
  create(context) {
    const options = context.options[0] || { disallow: [ 'todo', 'fixme' ] }

    return require('eslint-plugin-vue/lib/utils/html-comments').defineVisitor(
      context, null,
      comment => {
        for (const word of options.disallow) {
          if (comment.value.value.includes(word)) {
            context.report({
              loc: {
                end: comment.close.loc.end,
                start: comment.open.loc.start
              },
              message: `Unexpected: '${word}' comment: '${comment.value.value}'`,
              node: comment
            })
          }
        }
      }
    )
  },
  meta: {
    docs: {
      url: 'https://github.com/DaniFoldi/linters/tree/main/eslint-presets/rules/vue-no-future-comment.cjs'
    },
    schema: [
      {
        properties: {
          disallow: {
            items: {
              type: 'string'
            },
            type: 'array'
          }
        },
        type: 'object'
      }
    ],
    type: 'problem'
  }
}
