export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'project',
            title: 'Project',
            type: 'string',
        },
        {
            name: 'tech',
            title: 'Tech',
            type: 'string',
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'string',
        },
    ],
  };