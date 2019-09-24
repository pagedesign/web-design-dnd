import React from "react";
import { WebDesignDndProvider, DropContainer, DropItem } from "@/src";

const dataset = [];

for (let i = 0; i < 20; i++) {
    dataset.push({
        id: i + 1,
        title: `item${i + 1}`
    });
}

function ListItem({ item }) {
    return (
        <DropItem item={item}>
            {({ connectDragAndDrop, isDragging }) => {
                return (
                    <div
                        ref={connectDragAndDrop}
                        style={{
                            opacity: isDragging ? 0.5 : 1,
                            padding: 10,
                            margin: 5,
                            background: "#f2f2f2",
                            border: "1px solid #dadada"
                        }}
                    >
                        {item.title}
                    </div>
                );
            }}
        </DropItem>
    );
}

export default () => {
    const [value, onChange] = React.useState(dataset);

    return (
        <WebDesignDndProvider value={value} onChange={onChange}>
            <DropContainer>
                {items => (
                    <div
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: 4,
                            padding: 5,
                            width: 270,
                            margin: "30px auto",
                            height: "80%",
                            overflow: "auto"
                        }}
                    >
                        {items.map(item => (
                            <ListItem key={item.id} item={item} />
                        ))}
                    </div>
                )}
            </DropContainer>
        </WebDesignDndProvider>
    );
};