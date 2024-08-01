import Container from '@/components/container'
import { buttonVariants } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import NextLink from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className="bg-foreground min-h-screen">
      <Container as="main">
        <Card className="p-4 sm:p-6 w-full">
          <h1 className="font-bold text-xl">Payload 3.0</h1>
          <div className="mt-2.5">
            <p>
              This BETA is rapidly evolving, you can report any bugs against{' '}
              <Link href="https://github.com/payloadcms/payload-3.0-demo/issues" target="_blank">
                the repo
              </Link>{' '}
              or in the{' '}
              <Link
                href="https://discord.com/channels/967097582721572934/1215659716538273832"
                target="_blank"
              >
                dedicated channel in Discord
              </Link>
              . Payload is running at <Link href="/admin">/admin</Link>. An example of a custom
              route running the Local API can be found at <Link href="/my-route">/my-route</Link>.
            </p>
            <p>You can use the Local API in your server components like this:</p>
          </div>
          <div className="bg-foreground text-background rounded-lg p-4 mt-6 max-w-screen-lg overflow-x-auto w-full mx-auto">
            <pre>
              <code>
                {`import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
const payload = await getPayloadHMR({ config: configPromise })
const data = await payload.find({
  collection: 'posts',
})
return <Posts data={data} />
                `}
              </code>
            </pre>
          </div>
        </Card>
      </Container>
    </div>
  )
}

function Link({ className, children, ...props }: React.ComponentProps<typeof NextLink>) {
  return (
    <NextLink
      {...props}
      className={cn(
        buttonVariants({
          variant: 'link',
          size: 'lg',
        }),
        'p-0 h-auto text-base/normal focus-within:ring-0 focus-visible:ring-0 underline',
        className,
      )}
    >
      {children}
    </NextLink>
  )
}

export default Page
