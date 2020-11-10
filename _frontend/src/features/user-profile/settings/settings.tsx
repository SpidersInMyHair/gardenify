import React, { useContext } from 'react';
import { ProfileContext } from 'contexts/profile/profile.context';
import {
  SettingsForm,
  SettingsFormContent,
  HeadingSection,
  Title,
  Row,
  Col,
} from './settings.style';
import { Button } from 'components/button/button';
import { Input } from 'components/forms/input';
import { FormattedMessage } from 'react-intl';
import { Label } from 'components/forms/label';
import { editUser } from 'utils/api/user';

type SettingsContentProps = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const SettingsContent: React.FC<SettingsContentProps> = ({ deviceType }) => {
  const { state, dispatch } = useContext(ProfileContext);

  const handleChange = (e) => {
    const { value, name } = e.target;
    dispatch({
      type: 'HANDLE_ON_INPUT_CHANGE',
      payload: { value, field: name },
    });
  };

  const handleSave = () => editUser(state)

  return (
    <SettingsForm>
      <SettingsFormContent>
        <HeadingSection>
          <Title>
            <FormattedMessage
              id='profilePageTitle'
              defaultMessage='Your Profile'
            />
          </Title>
        </HeadingSection>
        <Row style={{ alignItems: 'flex-end', marginBottom: '50px' }}>
          <Col xs={12} sm={5} md={5} lg={5}>
            <Label>
              <FormattedMessage
                id='profileNameField'
                defaultMessage='Your Name'
              />
            </Label>
            <Input
              type='text'
              label='Name'
              name='name'
              value={state.name}
              onChange={handleChange}
              backgroundColor='#F7F7F7'
              height='48px'
            />
          </Col>

          <Col xs={12} sm={5} md={5} lg={5}>
            <Label>
              <FormattedMessage
                id='profileEmailField'
                defaultMessage='Your Email'
              />
            </Label>
            <Input
              type='email'
              name='email'
              label='Email Address'
              value={state.email}
              onChange={handleChange}
              backgroundColor='#F7F7F7'
            />
          </Col>
          <Col xs={12} sm={5} md={5} lg={5}>
            <Label>
              Bio
            </Label>
            <Input
              type='text'
              label='Bio'
              name='description'
              value={state.description}
              onChange={handleChange}
              backgroundColor='#F7F7F7'
              height='48px'
            />
          </Col>

          <Col xs={12} sm={5} md={5} lg={5}>
            <Label>
              Password
            </Label>
            <Input
              type='password'
              name='password'
              label='Password'
              onChange={handleChange}
              backgroundColor='#F7F7F7'
            />
          </Col>

          <Col xs={12} sm={2} md={2} lg={2}>
            <Button size='big' style={{ width: '100%' }} onClick={handleSave}>
              <FormattedMessage id='profileSaveBtn' defaultMessage='Save' />
            </Button>
          </Col>
        </Row>
      </SettingsFormContent>
    </SettingsForm>
  );
};

export default SettingsContent;
