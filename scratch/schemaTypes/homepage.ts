import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      // should match 'languageField' plugin configuration setting, if customized
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'headerLinks',
      type: 'array',
      title: 'Header Links',
      of: [
        defineField({
          name: 'headerLinksObjects',
          title: 'Header Link Objects',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              type: 'string',
              title: 'Label',
            }),
            defineField({
              name: 'href',
              type: 'string',
              title: 'Link URL',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'heroSection',
      type: 'object',
      title: 'Hero Section',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Title',
        }),
        defineField({
          name: 'description',
          type: 'text',
          title: 'Description',
        }),
        defineField({
          name: 'buttonLabel',
          type: 'string',
          title: 'Button Label',
        }),
        defineField({
          name: 'backgroundImage',
          type: 'image',
          title: 'Background Image',
        }),
      ],
    }),
    defineField({
      name: 'quickLinks',
      type: 'array',
      title: 'Quick Links',
      of: [
        defineField({
          name: 'quickLinksObjects',
          title: 'Quick Links Objects',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Title',
            }),
            defineField({
              name: 'image',
              type: 'image',
              title: 'Image',
            }),
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Image Alt Text',
            }),
            defineField({
              name: 'description',
              type: 'text',
              title: 'Description',
            }),
            defineField({
              name: 'href',
              type: 'string',
              title: 'Link URL',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'recentUpdate',
      type: 'object',
      title: 'Recent Update',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Title',
        }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
        }),
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Image Alt Text',
        }),
        defineField({
          name: 'description',
          type: 'text',
          title: 'Description',
        }),
        defineField({
          name: 'href',
          type: 'string',
          title: 'Link URL',
        }),
      ],
    }),
    defineField({
      name: 'historySection',
      type: 'object',
      title: 'History Section',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Title',
        }),
        defineField({
          name: 'description',
          type: 'text',
          title: 'Description',
        }),
        defineField({
          name: 'href',
          type: 'string',
          title: 'Link URL',
        }),
      ],
    }),
    defineField({
      name: 'conservationSection',
      type: 'object',
      title: 'Conservation Section',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Title',
        }),
        defineField({
          name: 'items',
          type: 'array',
          title: 'Items',
          of: [
            defineField({
              name: 'conservationItems',
              type: 'object',
              title: 'Conservation Items',
              fields: [
                defineField({
                  name: 'title',
                  type: 'string',
                  title: 'Title',
                }),
                defineField({
                  name: 'description',
                  type: 'text',
                  title: 'Description',
                }),
                defineField({
                  name: 'href',
                  type: 'string',
                  title: 'Link URL',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'educationSection',
      type: 'object',
      title: 'Education Section',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Title',
        }),
        defineField({
          name: 'items',
          type: 'array',
          title: 'Items',
          of: [
            defineField({
              name: 'educationItems',
              type: 'object',
              title: 'Conservation Items',
              fields: [
                defineField({
                  name: 'title',
                  type: 'string',
                  title: 'Title',
                }),
                defineField({
                  name: 'description',
                  type: 'text',
                  title: 'Description',
                }),
                defineField({
                  name: 'href',
                  type: 'string',
                  title: 'Link URL',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'contactSection',
      type: 'object',
      title: 'Contact Section',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Title',
        }),
        defineField({
          name: 'description',
          type: 'text',
          title: 'Description',
        }),
        defineField({
          name: 'href',
          type: 'string',
          title: 'Link URL',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
