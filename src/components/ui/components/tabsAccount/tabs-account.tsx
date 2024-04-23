"use client";
import { Button, Card, CardBody, Input, Tab, Tabs } from "@nextui-org/react";

export const TabsAccount = () => {
  const tabs = [
    {
      id: "account",
      label: "Account",
      content: (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            <Input
              type="email"
              label="First Name"
              placeholder="Enter your first name"
            />
            <Input
              type="email"
              label="Last Name"
              placeholder="Enter your last name"
            />
            <Input type="email" label="Email" placeholder="Enter your email" />
            <Input
              type="email"
              label="Phone Number"
              placeholder="Enter your phone number"
            />
            <Button color="secondary" variant="ghost">
              Cancel
            </Button>
            <Button color="primary" variant="solid">
              Save
            </Button>
          </div>
        </>
      ),
    },
    {
      id: "orders",
      label: "Orders",
      content: "There are no orders.",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        height: "50vh",
        backgroundColor: "#171717",
      }}
    >
      <Card className="max-w-[800px] min-w-[800px]">
        <CardBody>
          <Tabs aria-label="Dynamic tabs" items={tabs}>
            {(item) => (
              <Tab key={item.id} title={item.label}>
                <Card>
                  <CardBody>{item.content}</CardBody>
                </Card>
              </Tab>
            )}
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};
