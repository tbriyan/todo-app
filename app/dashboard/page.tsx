"use client"

import Iconify from "@/components/iconify"
import { Accordion, AccordionItem, Divider } from "@nextui-org/react"

export default function IndexPage() {
  return (
    <div className="flex justify-center">
      <div className="w-[720px]">
        <Accordion variant="splitted">
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            subtitle="Press to expand"
            title="Titulo"
            startContent={
              <Iconify icon='akar-icons:radio' />
            }
          >
            Contenido por defecto
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            subtitle={
              <span>
                Press to expand <strong>key 2</strong>
              </span>
            }
            title={<span className="line-through">Accordion 2</span>}
            startContent={
              <Iconify icon='akar-icons:radio-fill' color="success" />
            }
            classNames={
              {
                content: "pb-5 px-2",
              }
            }
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente officiis sit exercitationem cupiditate minus.
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" subtitle="Press to expand" title="Accordion 3">
            lookign for algo
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )

}