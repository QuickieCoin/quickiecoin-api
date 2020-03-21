import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import machine from './machine';
import faq from './faq';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    machine,
    faq
  ])
})
