const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`

export const categories = [
  {
    id: 'easy-care',
    title: 'Easy-care favourites',
    subtitle: 'Low-fuss companions for busy days.',
    plants: [
      { id: 'snake-plant', name: 'Snake Plant', price: 599, description: 'Architectural leaves that thrive on neglect.', image: photo('photo-1593482892290-f54927ae2b3b') },
      { id: 'golden-pothos', name: 'Golden Pothos', price: 449, description: 'A trailing classic with heart-shaped leaves.', image: photo('photo-1614594975525-e45190c55d0b') },
      { id: 'zz-plant', name: 'ZZ Plant', price: 699, description: 'Glossy foliage and wonderfully low demands.', image: photo('photo-1632207691143-643e2f2a2f3b') },
      { id: 'spider-plant', name: 'Spider Plant', price: 399, description: 'Playful arching leaves for shelves and desks.', image: photo('photo-1572688484438-313a6e50c333') },
      { id: 'jade-plant', name: 'Jade Plant', price: 499, description: 'A sculptural succulent with rounded leaves.', image: photo('photo-1509423350716-97f9360b4e09') },
      { id: 'peace-lily', name: 'Peace Lily', price: 649, description: 'Elegant green leaves with graceful white blooms.', image: photo('photo-1593691509543-c55fb32e5cee') },
    ],
  },
  {
    id: 'statement',
    title: 'Statement plants',
    subtitle: 'Big-leaf energy. Instant room character.',
    plants: [
      { id: 'monstera', name: 'Monstera Deliciosa', price: 1199, description: 'Iconic split leaves that make a room feel lush.', image: photo('photo-1614594895304-fe7116ac3b58') },
      { id: 'fiddle-leaf', name: 'Fiddle Leaf Fig', price: 1599, description: 'A bold, sculptural tree for bright corners.', image: photo('photo-1501004318641-b39e6451bec6') },
      { id: 'rubber-plant', name: 'Rubber Plant', price: 999, description: 'Deep glossy leaves with a modern silhouette.', image: photo('photo-1600411832986-5a4476b64a1c') },
      { id: 'bird-paradise', name: 'Bird of Paradise', price: 1899, description: 'Tropical drama with tall, elegant foliage.', image: photo('photo-1597055181300-a8b7be7f6b4b') },
      { id: 'calathea', name: 'Calathea Orbifolia', price: 1099, description: 'Soft, rounded leaves with silvery stripes.', image: photo('photo-1597055181449-1b4b3f2b6a89') },
      { id: 'alocasia', name: 'Alocasia Polly', price: 899, description: 'Arrow-shaped leaves with striking pale veins.', image: photo('photo-1593691509543-c55fb32e5cee') },
    ],
  },
  {
    id: 'fresh-air',
    title: 'Fresh-air greens',
    subtitle: 'Beautiful foliage to refresh your favourite spaces.',
    plants: [
      { id: 'areca-palm', name: 'Areca Palm', price: 1299, description: 'Feathery fronds bring a relaxed tropical feel.', image: photo('photo-1512428813834-c702c7702b78') },
      { id: 'boston-fern', name: 'Boston Fern', price: 749, description: 'A full, soft cascade of fresh green fronds.', image: photo('photo-1597055181300-a8b7be7f6b4b') },
      { id: 'dracaena', name: 'Dracaena', price: 899, description: 'Upright foliage that adds height and texture.', image: photo('photo-1509423350716-97f9360b4e09') },
      { id: 'english-ivy', name: 'English Ivy', price: 549, description: 'A graceful trailing plant for hanging pots.', image: photo('photo-1497250681960-ef046c08a56e') },
      { id: 'parlor-palm', name: 'Parlor Palm', price: 799, description: 'A compact palm that softens smaller spaces.', image: photo('photo-1518531933037-91b2f5f229cc') },
      { id: 'philodendron', name: 'Heartleaf Philodendron', price: 599, description: 'Easy-going heart-shaped leaves that trail beautifully.', image: photo('photo-1616690247584-7b4f8f4d3d4a') },
    ],
  },
]

export const allPlants = categories.flatMap((category) =>
  category.plants.map((plant) => ({ ...plant, category: category.title })),
)
