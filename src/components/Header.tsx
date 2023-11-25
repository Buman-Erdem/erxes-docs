import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Dropdown } from 'flowbite-react';

import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import {
  MobileNavigation,
  useIsInsideMobileNavigation,
} from '@/components/MobileNavigation'
import { useMobileNavigationStore } from '@/components/MobileNavigation'
import { MobileSearch, Search } from '@/components/Search'
import { ThemeToggle } from '@/components/ThemeToggle'

function TopLevelNavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <Link
        href={href}
        className=" flex text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

export const Header = forwardRef<
  React.ElementRef<'div'>,
  { className?: string }
>(function Header({ className }, ref) {
  let { isOpen: mobileNavIsOpen } = useMobileNavigationStore()
  let isInsideMobileNavigation = useIsInsideMobileNavigation()

  let { scrollY } = useScroll()
  let bgOpacityLight = useTransform(scrollY, [0, 72], [0.5, 0.9])
  let bgOpacityDark = useTransform(scrollY, [0, 72], [0.2, 0.8])

  return (
    <motion.div
      ref={ref}
      className={clsx(
        className,
        'fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80',
        !isInsideMobileNavigation &&
          'backdrop-blur-sm dark:backdrop-blur lg:left-72 xl:left-80',
        isInsideMobileNavigation
          ? 'bg-white dark:bg-zinc-900'
          : 'bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]',
      )}
      style={
        {
          '--bg-opacity-light': bgOpacityLight,
          '--bg-opacity-dark': bgOpacityDark,
        } as React.CSSProperties
      }
    >
      <div
        className={clsx(
          'absolute inset-x-0 top-full h-px transition',
          (isInsideMobileNavigation || !mobileNavIsOpen) &&
            'bg-zinc-900/7.5 dark:bg-white/7.5',
        )}
      />
      <Search />
      <div className="flex items-center gap-5 lg:hidden">
        <MobileNavigation />
        <Link href="/" aria-label="Home">
          <Logo className="h-6" />
        </Link>
      </div>
      <div className="flex items-center gap-5 -dark">
        <nav className="hidden md:block">
          <ul role="list" className="flex items-center gap-8 -dark">
            <TopLevelNavItem href="https://erxes.io/resource-center">Resource center</TopLevelNavItem>

            <TopLevelNavItem href="#">Documentation
            <Dropdown  label="" dismissOnClick={false}>
      <Dropdown.Item href="#">Developer Docs</Dropdown.Item>
      <Dropdown.Item href="/intro">Getting started</Dropdown.Item>
      <Dropdown.Item href="/quickstart">Setup & Deployment</Dropdown.Item>
      <Dropdown.Item href="#">Development</Dropdown.Item>
      <Dropdown.Item href="/authentication">Development resources</Dropdown.Item>
      <Dropdown.Item href="/pagination">Contributing to open source</Dropdown.Item>
      <Dropdown.Item href="#">User guide</Dropdown.Item>
      <Dropdown.Item href="https://discord.com/invite/K3hfx6ShmU">Getting started</Dropdown.Item>
      <Dropdown.Item href="#">User guide</Dropdown.Item>
      <Dropdown.Item href="https://erxes.io/showcase">Getting started</Dropdown.Item>
      <Dropdown.Item href="https://erxes.io/partners">XOS</Dropdown.Item>
      <Dropdown.Item href="#">Use cases</Dropdown.Item>
      </Dropdown>
  </TopLevelNavItem>

            <TopLevelNavItem href="#">Eco system
            <Dropdown  label="" dismissOnClick={false}>
      <Dropdown.Item href="#">Erxes</Dropdown.Item>
      <Dropdown.Item href="https://erxes.io/">Website</Dropdown.Item>
      <Dropdown.Item href="https://erxes.io/blog">Blog</Dropdown.Item>
      <Dropdown.Item href="https://github.com/orgs/erxes/projects/11/views/18">Roadmap</Dropdown.Item>
      <Dropdown.Item href="https://erxes.io/invest">Invest</Dropdown.Item>
      <Dropdown.Item href="https://erxes.io/marketplace">Market place</Dropdown.Item>
      <Dropdown.Item href="#">Community</Dropdown.Item>
      <Dropdown.Item href="https://discord.com/invite/K3hfx6ShmU">Discord</Dropdown.Item>
      <Dropdown.Item href="#">Forum - not ready</Dropdown.Item>
      <Dropdown.Item href="https://erxes.io/showcase">Show your use-case</Dropdown.Item>
      <Dropdown.Item href="https://erxes.io/partners">Become a partner</Dropdown.Item>
      <Dropdown.Item href="#">Resources</Dropdown.Item>
      <Dropdown.Item href="/groups">Use-cases</Dropdown.Item>
      <Dropdown.Item href="https://erxes.io/marketplace">Plugin tutorial</Dropdown.Item>
    </Dropdown>
</TopLevelNavItem>

            <TopLevelNavItem href="https://github.com/erxes/erxes">GitHub</TopLevelNavItem>
          </ul>
        </nav>
        <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" />
        <div className="flex gap-4">
          <MobileSearch />
          <ThemeToggle />
        </div>
      </div>
    </motion.div>
  )
})

