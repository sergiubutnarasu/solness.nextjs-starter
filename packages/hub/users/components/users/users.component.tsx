import {
  Box,
  Button,
  Grid,
  Icon,
  ListLoader,
  Tooltip,
  Typography,
} from '@solness/ui';
import React, { FunctionComponent } from 'react';
import { Link } from '../../../core';
import { useGetCompanyUsers } from '../../data';

export interface Props {}

const Users: FunctionComponent<Props> = () => {
  const { users, loading } = useGetCompanyUsers();

  if (loading) {
    return <ListLoader />;
  }

  return (
    <>
      {users?.map(
        (
          { id: companyUserId, roles, user: { email, firstName, lastName } },
          index,
        ) => {
          const userProfilePath = `users/${companyUserId}`;
          const color = index % 2 ? undefined : 'gray.50';

          return (
            <Grid
              key={companyUserId}
              px={4}
              py={2}
              bgColor={color}
              alignItems="center"
              borderRadius={8}
              columns={25}
            >
              <Grid.Item textAlign="center">
                {roles.some((role) => role === 'Owner') && (
                  <Tooltip as="span" placement="top" label="Owner">
                    <Icon icon="shield" />
                  </Tooltip>
                )}
              </Grid.Item>
              <Grid.Item colSpan={8}>
                <Typography.Text>
                  {firstName} {lastName}
                </Typography.Text>
              </Grid.Item>
              <Grid.Item colSpan={14}>
                <Typography.Text color="gray.500">{email}</Typography.Text>
              </Grid.Item>
              <Grid.Item colSpan={2} textAlign="right">
                <Link href={userProfilePath}>
                  <Button.Icon
                    variant="ghost"
                    aria-label="View details"
                    icon="dots"
                    size="sm"
                    color="gray"
                  />
                </Link>
              </Grid.Item>
            </Grid>
          );
        },
      )}
    </>
  );
};

export default Users;
