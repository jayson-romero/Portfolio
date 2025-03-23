import {rule} from 'postcss'
import {defineField, defineType} from 'sanity'

const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required().error('Required to generate a slug'),
    }),
    defineField({
      name: 'projectType',
      type: 'string',
      options: {
        list: ['Personal Project', 'Freelance Project'],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'technology'}]}],
    }),
    defineField({
      name: 'date',
      type: 'datetime',
    }),
    defineField({
      name: 'url',
      type: 'url',
    }),
  ],
})

export default projectType
