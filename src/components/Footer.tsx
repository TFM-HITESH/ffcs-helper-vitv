'use client'
import React, { Component } from 'react';
import Link from 'next/link';


class Footer extends Component {
  render() {
    const current_year = new Date().getFullYear();
    return (
      <div className="fixed bottom-0    ">
          <p>Copyright © {current_year},. All Rights Reserved.</p>
        </div>
    );
  }
}

export default Footer;