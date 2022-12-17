export default {
    name: 'molocal',
    title: 'MoLocal',
    type: 'document',
    fields: [
        {
            name: 'imagesmall',
            title: 'Imagesmall',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'imagelarge',
            title: 'Imagelarge',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'map',
            title: 'map',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'Name',
            title: 'Name',
            type: 'string',
        },
    ],
  };