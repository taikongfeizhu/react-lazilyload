/*
 * Created by wjx on 2017/4/18.
 */
import React from 'react';
import ReactDom from 'react-dom';

import LazilyLoad, {importLazy} from '../../src';

const MultiComp = () => {
    return (
        <LazilyLoad
            modules={{
                Comp1: () => importLazy(import('./Comp1')),
                Comp2: () => importLazy(import('./Comp2')),
            }}
        >
            {({Comp1, Comp2}) => (
                <div>
                    <Comp1/>
                    <Comp2/>
                </div>
            )}
        </LazilyLoad>
    );
};


ReactDom.render(
    <MultiComp/>,
    document.getElementById('root')
);
