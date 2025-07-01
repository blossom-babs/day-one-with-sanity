import {  defineField, defineType } from 'sanity'
import {CalendarIcon} from '@sanity/icons'
import { DoorsOpenInput } from './component/DoorOpenInput'

export const eventType = defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    icon: CalendarIcon,
    groups: [
        {name: 'details', title: 'Details'},
        {name: 'editorials', title: 'Editorials'},
    ],
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            group: ['details', 'editorials']
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {source: 'name'},
            validation: rule => rule.required().error('Required to publish a page'),
            hidden: ({document}) => !document?.name,
             group: 'details'
        }),
        defineField({
            name: 'eventType',
            type: 'string',
            options: {
                list: ['in-person', 'virtual'],
                layout: 'radio'
            },
             group: 'details'
        }),
        defineField({
            name: 'date',
            type: 'datetime',
             group: 'details'
        }),
        defineField({
            name: 'doorsOpen',
            description: 'Number of minutes before start time for admission',
            type: 'number',
            initialValue: 60,
            group: 'details',
            components: {
                input: DoorsOpenInput
            }
        }),
        defineField({
            name: 'venue',
            description: 'Venue can only be selected if event is in-person',
            type: 'reference',
            to: [{type: 'venue'}],
            readOnly: ({value, document}) => !value && document?.eventType === 'virtual',
            validation: (rule) => rule.custom((value, context) => {
                if(value && context?.document?.eventType === 'virtual'){
                    return 'Only in-person events can have a venue'
                }
                return true
            }),
             group: 'details'
        }),
        defineField({
            name: 'headline',
            type: 'reference',
            to: [{type: 'artist'}],
             group: 'details'
        }),
        defineField({
            name: 'image',
            type: 'image',
             group: 'editorials'
        }),
         defineField({
            name: 'details',
            type: 'array',
            of: [{type: 'block'}],
              group: 'editorials'
        }),
        defineField({
            name: 'tickets',
            type: 'url',
              group: 'details'
        })
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'headline.name',
            media: 'image'
        }
    }
})