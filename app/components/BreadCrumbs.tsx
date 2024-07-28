// /components/NextBreadcrumb.tsx
'use client'

import React, { ReactNode } from 'react'
import { Typography, Breadcrumbs, Link } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'

import { usePathname } from 'next/navigation'

type BreadcrumbProps = {
    courseName?: string;
  }

function BreadCrumbs({ courseName }: BreadcrumbProps) {

    const paths = usePathname()
    const pathNames = paths.split('/').filter( path => path )

    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }}
                color="inherit"
                href="/index"
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Home
                </Link>

                {
                pathNames.map( (link, index) => {
                    let href = `/${pathNames.slice(0, index + 1).join('/')}`
                    
                    // Check if this is the last path segment
                    if (index === pathNames.length - 1 && courseName) {
                        return (
                          <Typography
                            key={index}
                            color="inherit"
                          >
                            {courseName}
                          </Typography>
                        )
                    }
                    else {

                        return (
                            <Link
                            underline="hover"
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="inherit"
                            href={href}
                            key={index}
                            >
                            {link}
                        </Link>
                        )
                    }
                })          
                }
                </Breadcrumbs>
        </div>
    )
}

export default BreadCrumbs