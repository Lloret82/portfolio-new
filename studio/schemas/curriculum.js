export default {
      name: 'cv',
      title: 'Curriculum',
      type: 'document',
      fields: [
            {
                  name: 'title',
                  type: 'string',
                  title: 'Title'
            },
            {
                  title: 'Cv',
                  name: 'cv',
                  type: 'image',
                  options: {
                        hotspot: true,
                  },

            },

            {
                  name: 'description',
                  type: 'string',
                  title: 'Description'
            },


      ]
}