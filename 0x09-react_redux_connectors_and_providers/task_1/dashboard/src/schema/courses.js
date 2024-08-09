import { schema, normalize } from 'normalizr';

const course = new schema.Entity('courses');

// export const coursesNormalizer = (data) => normalize(data, [course]);

const coursesNormalizer = (data) => {
  const normalizedData = normalize(data, [course]);
  return normalizedData.entities.courses;
};

export default coursesNormalizer;