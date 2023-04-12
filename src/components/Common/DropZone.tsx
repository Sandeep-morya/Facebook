import React, { useState } from "react";
import { useDropzone, DropzoneOptions } from "react-dropzone";
import { ActionIcon, Box, useMantineTheme } from "@mantine/core";
import { AiOutlinePicture } from "react-icons/ai";
import { MdClose } from "react-icons/md";

interface DropZoneProps extends DropzoneOptions {
	files: File[];
	setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

function DropZone({ files, setFiles }: DropZoneProps) {
	const theme = useMantineTheme();
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop: (acceptedFiles) => {
			setFiles(acceptedFiles);
		},
		accept: { "image/*": [] },
		multiple: false,
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
			{files.length < 1 && (
				<AiOutlinePicture fill={theme.colors.gray[3]} size={100} />
			)}
			{files.length > 0 && (
				<Box
					sx={{
						display: "grid",
						placeItems: "center",
						position: "relative",
					}}>
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
					<ActionIcon
						bg={theme.colors.gray[2]}
						size="md"
						radius={"xl"}
						onClick={() => setFiles([])}
						sx={{ position: "absolute", right: "0", top: "0" }}>
						<MdClose size={22} />
					</ActionIcon>
				</Box>
			)}
		</div>
	);
}

export default DropZone;
