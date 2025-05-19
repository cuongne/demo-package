import {
  AppliedJobsUs,
  CvManagementUs,
  DashboardUs,
  FollowingJobsUs,
  Gear,
  JobManagement,
  LogoutUs,
} from './icon';
export const MENU_CONFIG = {
  account: {
    resume: [
      {
        type: 'default',
        href: '/users/profile?src=topdev.vn&medium=submenu',
        title: 'Dashboard',
        icon: <DashboardUs />,
      },
      {
        type: 'default',
        href: '/users/job-management?src=topdev.vn&medium=userprofilemenu',
        title: 'Job Management',
        icon: <JobManagement />,
      },
      {
        type: 'default',
        href: '/users/my-cv?src=topdev.vn&medium=submenu',
        title: 'CV Management',
        icon: <CvManagementUs />,
      },
      {
        type: 'default',
        href: '/users/jobs-applied?src=topdev.vn&medium=submenu',
        title: 'Applied Jobs',
        icon: <AppliedJobsUs />,
      },
      {
        type: 'default',
        href: '/users/jobs-followed?src=topdev.vn&medium=submenu',
        title: 'Following Jobs',
        icon: <FollowingJobsUs />,
      },
      {
        type: 'default',
        href: '/users/personality-test?src=topdev.vn&medium=submenu',
        title: 'Personality Test',
        icon: <Gear />,
      },
      {
        type: 'logout',
        href: '/logout',
        title: 'Logout',
        icon: <LogoutUs />,
      },
    ],
    employer: [
      {
        type: 'default',
        href: '/employer/dashboard',
        title: 'Employer Dashboard',
        icon: <DashboardUs />,
      },
      {
        type: 'default',
        href: '/products',
        title: 'Recruitment Services',
        icon: <CvManagementUs />,
      },
      {
        type: 'logout',
        href: '/logout',
        title: 'Logout',
        icon: <LogoutUs />,
      },
    ],
  },
} as const;
