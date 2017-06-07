/*
 * Created by wjx on 2017/4/18.
 */
import React from 'react';
import ReactDom from 'react-dom';

import {lazilyComponent} from '../../src';

const Comp1 = (props) => lazilyComponent(import('./Comp1'))(props);
const Comp2 = (props) => lazilyComponent(import('./Comp2'))(props);

ReactDom.render(
    (<div>
        <Comp1/>
        <Comp2/>
    </div>),
    document.getElementById('root')
);
