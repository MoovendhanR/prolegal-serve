import React from "react";


import { Navbar, Group, ScrollArea, createStyles, rem } from '@mantine/core';
import {
  IconNotes,
  IconFolderPlus,
  IconLayoutDashboard,
  IconBriefcase2,
  IconNotebook,
  IconBallpen,
  IconSettings,
  IconFileInvoice
} from '@tabler/icons-react';
import { Logo } from './Logo';
 import { LinksGroup } from './NavbarLinkGroup';

const mockdata = [
  { label: 'Dashboard', icon: IconLayoutDashboard },
  {
    label: 'Action items',
    icon: IconNotes,
    initiallyOpened: true,
    // links: [
    //   { label: 'Overview', link: '/' },
    //   { label: 'Forecasts', link: '/' },
    //   { label: 'Outlook', link: '/' },
    //   { label: 'Real time', link: '/' },
    // ],
  },
  {
    label: 'Create a Job',
    icon: IconFolderPlus,
    // links: [
    //   { label: 'Upcoming releases', link: '/' },
    //   { label: 'Previous releases', link: '/' },
    //   { label: 'Releases schedule', link: '/' },
    // ],
  },
  { label: 'Cases', icon: IconBriefcase2 },
  { label: 'Jobs', icon: IconNotebook },
  { label: 'Affidavits', icon: IconBallpen },
  { label: 'Invoice', icon: IconFileInvoice },

  {
    label: 'Configurations',
    icon: IconSettings,
    initiallyOpened: true,
    links: [
      { label: 'Profile', link: '/' },
      { label: 'Company', link: '/' },
      { label: 'Client Rates', link: '/' },
      { label: 'Server Rates', link: '/' },
      { label: 'Payments', link: '/' },
      { label: 'Notifications', link: '/' },
      { label: 'Entites', link:"/" },

    ],
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },


  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function NavbarPart() {
  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar height={800} width={{ sm: 250 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          <Logo width={rem(120)} />
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      {/* <Navbar.Section className={classes.footer}>
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Ann Nullpointer"
          email="anullpointer@yahoo.com"
        />
      </Navbar.Section> */}
    </Navbar>
  );
}