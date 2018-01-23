import { MyService } from './myService';

export const MYSERVICES: MyService[] = [
  {
    serviceId: '1',
    serviceName: 'IT Department',
    icon: 'computer',
    route: 'dashboard',
    serviceTasks: [
    {
      taskId: '1',
      taskName: 'Technical Support',
      icon: 'settings',
      route: '/it/ts'
    },
    {
      taskId: '2',
      taskName: 'Developer',
      icon: 'ic_developer_mode',
      route: '/it/ts'
    },
    ]
  },
  {
    serviceId: '2',
    serviceName: 'Academy',
    icon: 'computer',
    route: 'devotee',
    serviceTasks: [
    {
      taskId: '1',
      taskName: 'Content Writing',
      icon: 'book',
      route: '/it/ts'
    },
    {
      taskId: '2',
      taskName: 'Proof Reading',
      icon: 'ic_developer_mode',
      route: '/it/ts'
    },
    ]
  },  
];
