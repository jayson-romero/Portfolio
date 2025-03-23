import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

const techStackType = defineType({
  name: 'technology',
  title: 'Technology',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'techType',
      type: 'string',
      options: {
        list: ['language', 'Freamwork/library', 'database', 'tool', 'other'],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'isFeatured',
      description: 'Is it featured in Home page?',
      type: 'boolean',
    }),
    defineField({
      name: 'image',
      type: 'image',
      icon: ImageIcon,
    }),
  ],
})

export default techStackType
