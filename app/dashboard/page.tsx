"use client"

import Iconify from "@/components/iconify"
import { Accordion, AccordionItem, Button, Divider, Textarea } from "@nextui-org/react"

export default function IndexPage() {

  const listExample = [
    {
      key: 1,
      title: 'Accordion 1',
      subtitle: 'Subtitle 1',
      complete: false,
    },
    {
      key: 2,
      title: 'Accordion 2',
      subtitle: 'Summary 2',
      complete: true,
    },
    {
      key: 3,
      title: 'Item 3',
      subtitle: 'Summary 3',
      complete: true,
    },
    {
      key: 4,
      title: 'Item 4',
      subtitle: 'Description 4',
      complete: true,
    },
    {
      key: 5,
      title: 'Module 5',
      subtitle: 'Subtitle 5',
      complete: false,
    },
    {
      key: 6,
      title: 'Panel 6',
      subtitle: 'Subtitle 6',
      complete: true,
    }
  ]

  return (
    <div className="flex justify-center">
      <div className="w-[720px]">
        <Accordion variant="splitted">
          {listExample.map(item => (
            <AccordionItem
              key={item.key}
              aria-label={`Accordion ${item.key}`}
              subtitle={
                <span>
                  Presiona para expandir
                </span>
              }
              title={<span className="line-through">{item.title}</span>}
              startContent={
                <Iconify icon={item.complete ? 'akar-icons:radio-fill' : 'akar-icons:radio'} color={item.complete ? 'success' : 'default'} />
              }
              classNames={
                {
                  content: "pb-5 px-2",
                }
              }
            >
              <div>
              <Textarea
                isReadOnly
                fullWidth
                label="Notas"
                variant="bordered"
                labelPlacement="outside"
                placeholder="Enter your description"
                defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
              />
            </div>
            <div className="flex justify-end mt-5">
              <Button color="danger">
                Eliminar
              </Button>
            </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )

}