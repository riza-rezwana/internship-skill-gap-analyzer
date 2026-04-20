/*
  Warnings:

  - The values [SHORTLISTED] on the enum `application_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `application` ADD COLUMN `interviewDateTime` DATETIME(3) NULL,
    ADD COLUMN `interviewLocation` VARCHAR(191) NULL,
    ADD COLUMN `interviewMeetLink` VARCHAR(191) NULL,
    ADD COLUMN `interviewNote` VARCHAR(191) NULL,
    ADD COLUMN `interviewType` VARCHAR(191) NULL,
    MODIFY `status` ENUM('APPLIED', 'REVIEWED', 'INTERVIEW_SCHEDULED', 'REJECTED') NOT NULL DEFAULT 'APPLIED';

-- AlterTable
ALTER TABLE `internship` ADD COLUMN `applicationDeadline` DATETIME(3) NULL;
