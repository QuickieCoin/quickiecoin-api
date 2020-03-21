export default {
  title: "FAQs",
  name: "faqs",
  type: "document",
  fields: [
    {
      title: "FAQ Section",
      name: "tagline",
      type: "string",
    },
    {
      title: 'FAQ Items',
      name: 'faqItems',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'question', type: 'string', title: 'Question'},
          {name: 'answer', type: 'markdown', title: 'Answer'} // 
        ]
      }]
    }
  ]
};