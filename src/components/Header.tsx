'use client'

import clsx from 'clsx'
import { Dropdown } from 'flowbite-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { forwardRef } from 'react'
import {
  HiBookOpen,
  HiBriefcase,
  HiCash,
  HiChartBar,
  HiChatAlt2,
  HiCog,
  HiCollection,
  HiColorSwatch,
  HiCube,
  HiFolderOpen,
  HiGlobeAlt,
  HiHome,
  HiLocationMarker,
  HiMap,
  HiUserGroup,
  HiViewGrid,
} from 'react-icons/hi'

import { Logo } from '@/components/Logo'
import {
  MobileNavigation,
  useIsInsideMobileNavigation,
  useMobileNavigationStore,
} from '@/components/MobileNavigation'
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
        className=" dark:hover:text-dark flex text-sm leading-5 text-zinc-600 transition hover:text-zinc-600 dark:text-zinc-400"
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
          'bg-violet-50 dark:bg-zinc-950 lg:left-72 xl:left-80',
        isInsideMobileNavigation
          ? 'bg-dark dark:bg-zinc-900'
          : 'bg-dark/[var(--bg-opacity-dark)] dark:bg-zinc-900/[var(--bg-opacity-dark)]',
      )}
      style={
        {
          '--bg-opacity-light': bgOpacityDark,
          '--bg-opacity-dark': bgOpacityDark,
        } as React.CSSProperties
      }
    >
      <div
        className={clsx(
          'absolute inset-x-0 top-full h-px transition',
          (isInsideMobileNavigation || !mobileNavIsOpen) &&
            'dark:bg-dark/7.5 bg-zinc-900/7.5',
        )}
      />
      <Search />
      <div className="flex items-center gap-2 lg:hidden">
        <MobileNavigation />
        <Link href="/" aria-label="Home">
          <Logo className="h-6" />
        </Link>
      </div>
      <div className="-dark flex items-center gap-4">
        <nav className="hidden md:block">
          <ul role="list" className="-dark flex items-center gap-10">
            <TopLevelNavItem href="https://erxes.io/resource-center">
              Resource center
            </TopLevelNavItem>

            <TopLevelNavItem href="">
              Documentation
              <Dropdown
                label=""
                color="black"
                dismissOnClick={true}
                className="w-70 my-6 flex h-auto gap-2.5 rounded-2xl border-violet-100 bg-violet-100  p-4 leading-6 dark:border-violet-300 dark:bg-violet-300 dark:text-zinc-950"
              >
                <Dropdown.Item
                  style={{ fontWeight: 'bold' }}
                  className="text-base"
                  href="#"
                >
                  Developer Docs
                </Dropdown.Item>
                <Dropdown.Item icon={HiHome}>
                  <Link href="intro"> Getting started</Link>
                </Dropdown.Item>
                <Dropdown.Item icon={HiCog}>
                  <Link href="quickstart"> Setup & Deployment</Link>
                </Dropdown.Item>
                <Dropdown.Item icon={HiViewGrid}>
                  <Link href="quickstart">Development</Link>
                </Dropdown.Item>
                <Dropdown.Item icon={HiBriefcase}>
                  <Link href="authentication">Development resources</Link>
                </Dropdown.Item>
                <Dropdown.Item icon={HiFolderOpen}>
                  <Link href="pagination">Contributing to open source</Link>
                </Dropdown.Item>
                <Dropdown.Item
                  style={{ fontWeight: 'bold' }}
                  className="text-base"
                  href="#"
                >
                  User guide
                </Dropdown.Item>
                <Dropdown.Item icon={HiHome}>
                  <Link href="contacts"> Getting started </Link>
                </Dropdown.Item>
                <Dropdown.Item icon={HiBookOpen}>
                  <Link href="conversations"> XOS </Link>
                </Dropdown.Item>
                <Dropdown.Item icon={HiColorSwatch}>
                  <Link href="groups"> Use cases </Link>
                </Dropdown.Item>
              </Dropdown>
            </TopLevelNavItem>

            <TopLevelNavItem href="">
              Eco system
              <Dropdown
                label=""
                color="black"
                dismissOnClick={true}
                className="w-70 my-6 flex h-auto gap-2.5 rounded-2xl border-violet-100 bg-violet-100  p-4 leading-6 dark:border-violet-300 dark:bg-violet-300 dark:text-zinc-950 dark:[--tw-prose-links-hover:theme(colors.violet.300)] dark:[--tw-prose-links:theme(colors.white)]"
              >
                <Dropdown.Item
                  style={{ fontWeight: 'bold' }}
                  className="text-base"
                  href="#"
                >
                  Erxes
                </Dropdown.Item>
                <Dropdown.Item icon={HiGlobeAlt}>
                  <Link href="https://erxes.io/"> Website </Link>
                </Dropdown.Item>
                <Dropdown.Item icon={HiCash}>
                  <Link href=" https://erxes.io/blog"> Blog </Link>
                </Dropdown.Item>
                <Dropdown.Item icon={HiLocationMarker}>
                  <Link href="https://github.com/orgs/erxes/projects/11/views/18">
                    {' '}
                    Roadmap{' '}
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item icon={HiMap}>
                  <Link href="https://erxes.io/invest">Invest</Link>
                </Dropdown.Item>
                <Dropdown.Item icon={HiChartBar}>
                  <Link href="https://erxes.io/marketplace">Market place</Link>
                </Dropdown.Item>
                <Dropdown.Item
                  style={{ fontWeight: 'bold' }}
                  className="text-base"
                  href="#"
                >
                  Community
                </Dropdown.Item>
                <Dropdown.Item icon={HiChatAlt2}>
                  <Link href="https://discord.com/invite/K3hfx6ShmU">
                    Discord
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item icon={HiCube} href="#">
                  Forum - not ready
                </Dropdown.Item>
                <Dropdown.Item icon={HiColorSwatch}>
                  <Link href="https://erxes.io/showcase">
                    Show your use-case
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item icon={HiUserGroup}>
                  <Link href="https://erxes.io/partners">Become a partner</Link>
                </Dropdown.Item>
                <Dropdown.Item
                  style={{ fontWeight: 'bold' }}
                  className="text-base"
                  href="#"
                >
                  Resources
                </Dropdown.Item>
                <Dropdown.Item icon={HiColorSwatch}>
                  <Link href="groups">Use-cases</Link>
                </Dropdown.Item>
                <Dropdown.Item icon={HiCollection}>
                  <Link href="https://erxes.io/marketplace">
                    Plugin tutorial
                  </Link>
                </Dropdown.Item>
              </Dropdown>
            </TopLevelNavItem>

            <TopLevelNavItem href="https://github.com/erxes/erxes">
              GitHub
            </TopLevelNavItem>
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
