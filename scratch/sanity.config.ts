import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {documentInternationalization} from '@sanity/document-internationalization'

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
export const dataset = process.env.SANITY_STUDIO_DATASET!

export default defineConfig({
  name: 'default',
  title: 'scratch',
  projectId,
  dataset,
  plugins: [
    structureTool(),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        {id: 'es', title: 'Spanish'},
        {id: 'en', title: 'English'},
      ],
      schemaTypes: ['post'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
