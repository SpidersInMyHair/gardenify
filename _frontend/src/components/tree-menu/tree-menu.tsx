import React from 'react';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';

import { Input } from 'components/forms/input';
import { Button } from 'components/button/button';

const initialValues = {
  name:         {title: 'Name',         value: ''},
  common_name:  {title: 'Common Name',  value: ''},
  genus:        {title: 'Genus',        value: ''},
  family:       {title: 'Family',      value: ''}
}

export const TreeMenu: React.FC = () => {

  const router = useRouter();

  // if (error) return <ErrorMessage message={error.message} />;
  const { pathname, query } = router;

  const onSubmit = (values: any) => {
    const queryValues = {}
    for (const property in values) {
      const val = values[property].value
      if (val && val !== '') queryValues[property] = val
    }

    router.push({
      pathname,
      query: { ...query, ...queryValues },
    })
  };

  return (
    <Formik 
      onSubmit={onSubmit}
      initialValues={initialValues} 
    >
      {({
        values,
        setFieldValue
      }) => (
      <Form >
        {
          Object.keys(initialValues).map((category) => {
            return (
              <Input onChange={e => setFieldValue(category, {...values[category], value: e.target.value})} value={values[category].value} name={category} key={category} placeholder={values[category].title} />
            );
          })
        }
        <Button type="submit">Search</Button>
      </Form>
      )}
    </Formik>
  );
};
