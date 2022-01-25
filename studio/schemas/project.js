export default {
      name: 'project',
      title: 'Project',
      type: 'document',
      fields: [
            {
                  name: 'title',
                  type: 'string'
            },
            {
                  name: 'date',
                  type: 'date',
                  options: {
                        dateFormat: 'DD-MM-YYYY'
                  },
            },
            {
                  name: 'description',
                  type: 'text'
            },
            {
                  name: 'projectType',
                  title: 'Project Type',
                  type: 'string',
                  options: {
                        list: [
                              { value: 'personal', title: 'Personal' },
                              { value: 'customer', title: 'Customer' },
                              { value: 'university', title: 'University' }
                        ]
                  }



            },

            {
                  name: 'link',
                  type: 'url',
            },
            {
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {
                        hotspot: true,
                  },
            },


      ],
      preview: {
            select: {
                  title: 'name',
                  media: 'image',
            },
      },
}



