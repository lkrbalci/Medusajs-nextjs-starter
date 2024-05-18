import { Metadata } from "next"

import AddressBook from "@modules/account/components/address-book"

import { getCustomer } from "@lib/data"
import { notFound } from "next/navigation"
import { getRegion } from "app/actions"

export const metadata: Metadata = {
  title: "Addresses",
  description: "View your addresses",
}

export default async function Addresses() {
  const customer = await getCustomer()
  const region = await getRegion()

  if (!customer || !region) {
    notFound()
  }

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Shipping Addresses</h1>
        <p className="text-base-regular">
          View and update your shipping addresses, you can add as many as you
          like. Saving your addresses will make them available during checkout.
        </p>
      </div>
      <AddressBook customer={customer} region={region} />
    </div>
  )
}
