import React, { useState } from "react";
import { useDropzone, DropzoneOptions } from "react-dropzone";
import { Box, Button } from "@mantine/core";

interface DropZoneProps extends DropzoneOptions {
	files: File[];
	setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

function DropZone({ files, setFiles }: DropZoneProps) {
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop: (acceptedFiles) => {
			setFiles(acceptedFiles);
		},
	});

	const handlePreviewClick = (index: number) => {
		const fileInput = document.createElement("input");
		fileInput.type = "file";
		fileInput.accept = "image/*";
		fileInput.onchange = (event) => {
			const target = event.target as HTMLInputElement;
			if (target.files) {
				const newFiles = [...files];
				newFiles[index] = target.files[0];
				setFiles(newFiles);
			}
		};
		fileInput.click();
	};

	return (
		<div
			{...getRootProps()}
			style={{ border: "1px dashed gray", padding: 30, textAlign: "center" }}>
			<input {...getInputProps()} />
			{isDragActive ? (
				<p>Drop the images here ...</p>
			) : (
				<p>Drag and drop images here, or click to select files</p>
			)}
			{files.length > 0 && (
				<Box
					mah={"250px"}
					sx={{ display: "flex", flexWrap: "wrap", overflow: "scroll" }}>
					{files.map((file, index) => (
						<img
							key={index}
							src={URL.createObjectURL(file)}
							alt={`preview-${index}`}
							style={{
								maxWidth: 200,
								maxHeight: 200,
								margin: 10,
								cursor: "pointer",
							}}
							onClick={() => handlePreviewClick(index)}
						/>
					))}
				</Box>
			)}
			<Button style={{ marginTop: 20 }} variant="outline">
				Upload
			</Button>
		</div>
	);
}

export default DropZone;
