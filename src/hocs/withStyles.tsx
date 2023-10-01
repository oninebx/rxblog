import React, { ComponentType } from 'react';

export const withStyles = (styles: React.CSSProperties) => <P={}>(Component: ComponentType<P>) => 
(props: P) => <Component {...props} style={styles} />;