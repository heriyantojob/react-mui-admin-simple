// assets
import DashboardIcon from '@mui/icons-material/Dashboard';
import StarBorder from '@mui/icons-material/StarBorder';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
// constant

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const menuPages = [
        {
                
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
    
            url: '',
            target: true,
            icon: <DashboardIcon/>,

          
        },
  
            {
                
           
                id: 'userManagement',
                title: 'User Management',
                type: 'collapse',
                icon: <ManageAccountsIcon/>,

                children: [
                    {
                        id: 'user',
                        title: 'User',
                        type: 'item',
                        url: '/user',
                        target: true,
                        icon: <PersonIcon/>,
              
                    },
                    {
                        id: 'userAdd',
                        title: 'User Add',
                        type: 'item',
                        url: '/user/add',
                        target: true,
                        icon: <PersonAddIcon/>,
                    },
                    {
                        id: 'admin',
                        title: 'Admin',
                        type: 'item',
                        url: '/admin',
                        target: true,
                        icon: <GroupIcon/>,
              
                    },
                    {
                        id: 'adminAdd',
                        title: 'Add Admin',
                        type: 'item',
                        url: '/admin/add',
                        target: true,
                        icon: <GroupAddIcon/>,
                    }
                ],
            },
      

       


           
        

   
];

export default menuPages;
