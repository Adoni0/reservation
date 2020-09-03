import React from 'react';
import { UserContext } from '../providers/UserProvider';
import Application from './Application';
import UserProvider from '../providers/UserProvider';

export default function Provide() {
    return (
        <UserProvider>
            <Application />
        </UserProvider>
    )
}
