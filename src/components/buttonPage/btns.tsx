import Content from "../layout/content";
import { CameraIcon, UserIcon, HeartIcon } from "@/lib/components/icons";
import { Button } from "@/lib/form";

export const BtnDefault = () => (
  <Content>
    <Button color="primary">Button</Button>
  </Content>
);

export const BtnDisabled = () => (
  <Content>
    <Button isDisabled color="primary">
      Button
    </Button>
  </Content>
);

export const BtnZise = () => (
  <Content>
    <div className="flex gap-4 items-center">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  </Content>
);

export const BtnRadius = () => (
  <Content>
    <div className="flex gap-4 items-center">
      <Button radius="full">Full</Button>
      <Button radius="lg">Large</Button>
      <Button radius="md">Medium</Button>
      <Button radius="sm">Small</Button>
      <Button radius="none">None</Button>
    </div>
  </Content>
);

export const BtnColors = () => (
  <Content>
    <div className="flex gap-4 items-center">
      <Button color="default">Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
    </div>
  </Content>
);

export const BtnVariant = () => (
  <Content>
    <div className="flex gap-4 items-center">
      <Button color="primary" variant="solid">
        Solid
      </Button>
      <Button color="primary" variant="bordered">
        Bordered
      </Button>
      <Button color="primary" variant="light">
        Light
      </Button>
      <Button color="primary" variant="flat">
        Flat
      </Button>
      <Button color="primary" variant="ghost">
        Ghost
      </Button>
      <Button color="primary" variant="shadow">
        Shadow
      </Button>
    </div>
  </Content>
);

export const BtnLoading = () => (
  <Content>
    <div className="flex gap-4 items-center">
      <Button color="primary" isLoading>
        Button
      </Button>
      <Button
        isLoading
        color="secondary"
        spinner={
          <svg
            className="animate-spin h-5 w-5 text-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              fill="currentColor"
            />
          </svg>
        }
      >
        Loading
      </Button>
    </div>
  </Content>
);

export const BtnWithIcon = () => (
  <Content>
    <div className="flex gap-4 items-center">
      <Button color="success" endContent={<CameraIcon />}>
        Take a photo
      </Button>
      <Button color="danger" variant="bordered" startContent={<UserIcon />}>
        Delete user
      </Button>
    </div>
  </Content>
);

export const BtnOnlyIcon = () => (
  <Content>
    <div className="flex gap-4 items-center">
      <Button isIconOnly color="danger" aria-label="Like">
        <HeartIcon />
      </Button>
      <Button isIconOnly color="warning" variant="shadow" aria-label="Take a photo">
        <CameraIcon />
      </Button>
    </div>
  </Content>
);

export const BtnCustomStyle = () => (
  <Content>
    <Button
      radius="full"
      className="bg-gradient-to-tr from-secondary-500 to-warning-500 text-white shadow-lg"
    >
      Button
    </Button>
  </Content>
);
